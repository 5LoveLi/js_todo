

interface IFooterProps {
  onClick: (status: boolean) => void,
}

export const Footer = ({ onClick }: IFooterProps) => {

  // const all = () => {
  //   onClick(true)

  // }

  const completed = () => {
    onClick(true)
  }

  const active = () => {
    onClick(false)
  }

  return (
    <div>
      {/* <button type="submit" onClick={all}>все</button> */}
      <button type="submit" onClick={completed}>выполненные</button>
      <button type="submit" onClick={active}>активные</button>
    </div>
  )
} 