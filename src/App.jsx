import { useState, useRef, useEffect } from 'react'
import { CASES, FEEDBACK_SYSTEM, HINTS } from './cases.js'
import './App.css'

export default function App() {
  const [selectedCase, setSelectedCase] = useState(null)
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [view, setView] = useState('select') // 'select' | 'chat'
  const chatEndRef = useRef(null)
  const textareaRef = useRef(null)

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, loading])

  const startCase = (key) => {
    setSelectedCase(key)
    setMessages([{
      role: 'assistant',
      content: `안녕하세요... (불편한 표정으로 앉아 있음)\n\n어서 오세요, 선생님. 좀 봐주세요.`
    }])
    setView('chat')
  }

  const resetCase = () => {
    setSelectedCase(null)
    setMessages([])
    setInput('')
    setView('select')
  }

  const sendMessage = async (text) => {
    if (!text.trim() || loading) return
    const userMsg = { role: 'user', content: text }
    const newMessages = [...messages, userMsg]
    setMessages(newMessages)
    setInput('')
    setLoading(true)
    if (textareaRef.current) textareaRef.current.style.height = 'auto'

    try {
      const res = await fetch('/api/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          system: CASES[selectedCase].system,
          messages: newMessages
        })
      })
      const data = await res.json()
      setMessages(prev => [...prev, { role: 'assistant', content: data.reply }])
    } catch {
      setMessages(prev => [...prev, { role: 'assistant', content: '(오류가 발생했습니다. 다시 시도해주세요.)' }])
    }
    setLoading(false)
  }

  const getFeedback = async () => {
    if (messages.length < 2 || loading) return
    setLoading(true)
    const feedbackMessages = [
      ...messages,
      { role: 'user', content: '지금까지의 대화를 바탕으로 내 병력청취를 평가해주세요.' }
    ]
    try {
      const res = await fetch('/api/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          system: FEEDBACK_SYSTEM,
          messages: feedbackMessages
        })
      })
      const data = await res.json()
      setMessages(prev => [...prev, {
        role: 'feedback',
        content: data.reply
      }])
    } catch {
      alert('피드백 생성 중 오류가 발생했습니다.')
    }
    setLoading(false)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage(input)
    }
  }

  const handleTextareaInput = (e) => {
    setInput(e.target.value)
    e.target.style.height = 'auto'
    e.target.style.height = Math.min(e.target.scrollHeight, 120) + 'px'
  }

  const caseData = selectedCase ? CASES[selectedCase] : null

  if (view === 'select') {
    return (
      <div className="select-page">
        <div className="select-header">
          <div className="logo-mark">CPX</div>
          <h1>호흡기내과 CPX 시뮬레이터</h1>
          <p>케이스를 선택하면 AI 환자와 병력청취를 시작합니다</p>
        </div>
        <div className="case-grid">
          {Object.entries(CASES).map(([key, c]) => (
            <button key={key} className="case-card" onClick={() => startCase(key)}>
              <div className={`case-tag tag-${c.tagColor}`}>{c.tag}</div>
              <div className="case-label">{c.label}</div>
              <div className="case-meta">{c.meta}</div>
            </button>
          ))}
        </div>
        <div className="select-footer">
          Harrison's 21st Ed. 기반 · GINA 2025 · 아주대학교 내과 로테이션
        </div>
      </div>
    )
  }

  return (
    <div className="chat-page">
      <div className="chat-header">
        <button className="back-btn" onClick={resetCase}>← 케이스 선택</button>
        <div className="chat-header-info">
          <span className="chat-title">{caseData.label}</span>
          <span className="chat-meta">{caseData.meta}</span>
        </div>
        <button className="feedback-btn" onClick={getFeedback} disabled={loading || messages.length < 2}>
          피드백 받기
        </button>
      </div>

      <div className="hint-bar">
        {HINTS.map((h) => (
          <button key={h.label} className="hint-chip" onClick={() => {
            setInput(h.q)
            textareaRef.current?.focus()
          }}>{h.label}</button>
        ))}
      </div>

      <div className="chat-body">
        {messages.map((m, i) => {
          if (m.role === 'feedback') {
            return (
              <div key={i} className="feedback-block">
                <div className="feedback-label">교수 피드백</div>
                <div className="feedback-content">{m.content}</div>
              </div>
            )
          }
          return (
            <div key={i} className={`msg ${m.role === 'user' ? 'msg-user' : 'msg-pt'}`}>
              {m.role !== 'user' && <div className="avatar avatar-pt">환자</div>}
              <div className="bubble">{m.content}</div>
              {m.role === 'user' && <div className="avatar avatar-doc">나</div>}
            </div>
          )
        })}
        {loading && (
          <div className="msg msg-pt">
            <div className="avatar avatar-pt">환자</div>
            <div className="bubble typing-bubble">
              <span className="dot" /><span className="dot" /><span className="dot" />
            </div>
          </div>
        )}
        <div ref={chatEndRef} />
      </div>

      <div className="chat-input-area">
        <textarea
          ref={textareaRef}
          className="chat-input"
          value={input}
          onChange={handleTextareaInput}
          onKeyDown={handleKeyDown}
          placeholder="환자에게 질문하세요... (Enter 전송 / Shift+Enter 줄바꿈)"
          rows={1}
          disabled={loading}
        />
        <button className="send-btn" onClick={() => sendMessage(input)} disabled={loading || !input.trim()}>
          ▶
        </button>
      </div>
    </div>
  )
}
