import { NumberInput, Slider } from '@mantine/core'
import classes from '@/components/ui/Slider/Slider.module.scss'

interface ISlider {
  min: number
  max: number
  step: number
  value?: number | string
  label: string
  placeholder: string
  error?: string
  onChange?: (a: number | string) => void
}

export default function SliderInput({
  placeholder,
  label,
  step,
  max,
  min,
  value,
  onChange,
}: ISlider) {
  return (
    <div className={classes.wrapper}>
      <NumberInput
        value={value}
        onChange={onChange}
        label={label}
        placeholder={placeholder}
        step={step}
        min={min}
        max={max}
        hideControls
        classNames={{ input: classes.input, label: classes.label }}
      />
      <Slider
        max={max}
        step={step}
        min={min}
        label={null}
        value={typeof value === 'string' ? 0 : value}
        onChange={onChange}
        size={2}
        className={classes.slider}
        classNames={classes}
      />
    </div>
  )
}
