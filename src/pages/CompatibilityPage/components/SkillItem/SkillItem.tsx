import React from 'react'
import type { SkillItemProps } from './SkillItem.types'
import './SkillItem.css'

const SkillItem: React.FC<SkillItemProps> = ({ name, has_skill }) => {
  const statusClass = has_skill ? 'has-skill' : 'missing-skill'
  const icon = has_skill ? '✓' : '◯'

  return (
    <div className={`skill-item ${statusClass}`}>
      <span className="skill-icon">{icon}</span>
      <span className="skill-name">{name}</span>
    </div>
  )
}
export default SkillItem
