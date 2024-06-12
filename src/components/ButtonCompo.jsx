
import { Button } from "flowbite-react";

export const ButtonCompo = ({onClick, title}) => {
  return (
    <div>
        <Button gradientMonochrome="success" onClick={onClick}> {title} </Button>
    </div>
  )
}
