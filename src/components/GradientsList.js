import Gradient from "./Gradient"
const GradientsList = (props) => {
  const { gradients, uniqueTags } = props
  return (
    <ul className="row list-unstyled">
      <Gradient
        colorStart="rgb(189, 195, 199)"
        colorEnd="rgb(44, 62, 80)"
        name="Grade Grey"
      />
    </ul>
  )
}

export default GradientsList
