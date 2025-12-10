import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import ItemList from './pages/ItemList'
import './App.css'

function App() {
  const [healthStatus, setHealthStatus] = useState<string>('')

  useEffect(() => {
    // API 헬스 체크
    fetch('http://localhost:8000/api/v1/health')
      .then(res => res.json())
      .then(data => setHealthStatus(data.message))
      .catch(() => setHealthStatus('API 연결 실패'))
  }, [])

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>CodexExample</h1>
          <p>API 상태: {healthStatus || '확인 중...'}</p>
          <nav>
            <Link to="/">홈</Link> | <Link to="/items">아이템 목록</Link>
          </nav>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/items" element={<ItemList />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

function Home() {
  return (
    <div>
      <h2>환영합니다!</h2>
      <p>React + TypeScript 프론트엔드와 FastAPI 백엔드로 구성된 프로젝트입니다.</p>
    </div>
  )
}

export default App
