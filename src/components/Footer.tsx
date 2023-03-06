

interface IFooterProps {
  onClick: (status: number) => void,
}

export const Footer = ({ onClick }: IFooterProps) => {

  const all = () => {
    onClick(0)

  }

  const completed = () => {
    onClick(1)
  }

  const active = () => {
    onClick(2)
  }

  return (
    <div>
      <button type="submit" onClick={all}>все</button>
      <button type="submit" onClick={completed}>выполненные</button>
      <button type="submit" onClick={active}>активные</button>
    </div>
  )
} 