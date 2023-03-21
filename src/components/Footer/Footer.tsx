

interface IFooterProps {
  onFilterTasks: (status: string) => void
}

export const Footer = ({ onFilterTasks }: IFooterProps) => {

  const all = () => {
    onFilterTasks('all')

  }

  const completed = () => {
    onFilterTasks('completed')
  }

  const active = () => {
    onFilterTasks('active')
  }

  return (
    <div>
      <button type="submit" onClick={all}>все</button>
      <button type="submit" onClick={completed}>выполненные</button>
      <button type="submit" onClick={active}>активные</button>
    </div>
  )
} 