import { WrappedFieldArrayProps } from "redux-form"

export type InputPropsType = {
  label: string,
  value: string,
  meta: WrappedFieldArrayProps,
  input: {
    value: string
    name: string
  }
}
