import { useState, useEffect } from 'react'
import { itemService } from '../services/itemService'
import { Item, ItemCreate } from '../types/item'

function ItemList() {
  const [items, setItems] = useState<Item[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string>('')
  const [showForm, setShowForm] = useState(false)
  const [formData, setFormData] = useState<ItemCreate>({
    name: '',
    description: '',
    price: 0,
  })

  useEffect(() => {
    loadItems()
  }, [])

  const loadItems = async () => {
    try {
      setLoading(true)
      const data = await itemService.getItems()
      setItems(data)
      setError('')
    } catch (err) {
      setError('아이템을 불러오는데 실패했습니다.')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await itemService.createItem(formData)
      setFormData({ name: '', description: '', price: 0 })
      setShowForm(false)
      loadItems()
    } catch (err) {
      setError('아이템 생성에 실패했습니다.')
      console.error(err)
    }
  }

  const handleDelete = async (id: number) => {
    if (window.confirm('정말 삭제하시겠습니까?')) {
      try {
        await itemService.deleteItem(id)
        loadItems()
      } catch (err) {
        setError('아이템 삭제에 실패했습니다.')
        console.error(err)
      }
    }
  }

  if (loading) return <div>로딩 중...</div>
  if (error) return <div style={{ color: 'red' }}>{error}</div>

  return (
    <div>
      <h2>아이템 목록</h2>

      <button onClick={() => setShowForm(!showForm)}>
        {showForm ? '취소' : '새 아이템 추가'}
      </button>

      {showForm && (
        <form onSubmit={handleSubmit} style={{ margin: '20px 0' }}>
          <div className="form-group">
            <label>이름:</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
          </div>
          <div className="form-group">
            <label>설명:</label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label>가격:</label>
            <input
              type="number"
              step="0.01"
              value={formData.price}
              onChange={(e) => setFormData({ ...formData, price: parseFloat(e.target.value) })}
              required
            />
          </div>
          <button type="submit">생성</button>
        </form>
      )}

      {items.length === 0 ? (
        <p>아이템이 없습니다.</p>
      ) : (
        items.map((item) => (
          <div key={item.id} className="item-card">
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p>가격: ₩{item.price.toLocaleString()}</p>
            <button className="delete" onClick={() => handleDelete(item.id)}>
              삭제
            </button>
          </div>
        ))
      )}
    </div>
  )
}

export default ItemList
