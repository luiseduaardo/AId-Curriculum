import React from 'react'
import { useNavigate } from 'react-router-dom'
import './BackButton.css'

type Props = {
  to?: string;
  onClick?: () => void;
}

const BackButton: React.FC<Props> = ({ to, onClick }) => { // 'to' não tem mais valor padrão
  const navigate = useNavigate()

  const handleClick = () => {
    if (onClick) {
      onClick()
    } else if (to) {
      navigate(to)
    } else {
      navigate(-1)
    }
  }

  return (
    <button className="back-button" onClick={handleClick}>
      ← Voltar
    </button>
  )
}

export default BackButton
