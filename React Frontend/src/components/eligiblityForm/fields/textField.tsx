import { handleFieldChangeType } from '../types'

export interface textFieldProps {
  title?: string
  placeholder?: string
  name?: string
  value?: string
  handleFieldChange: handleFieldChangeType
}

export const TextField = ({title = "", placeholder = "", name = "", value = "", handleFieldChange}: textFieldProps) => (
  <fieldset className="styled-components__FieldSetWrapper-sc-9ftzsn-1 bCvGkS">
    <legend className="styled-components__Legend-sc-9ftzsn-3 kOcLQB">{title}</legend>
    <span className="styled-components__FieldsWrapper-sc-eckmxt-0 bpePzI">
      <span className="sc-1i7rfx1-0 dgmXYl">
        <span className="styled-components__InputWrapper-sc-3y6w2z-0 gKKise">
          <input id={name} name={name} value={value} placeholder={placeholder} className="styled-components__StyledInput-sc-3y6w2z-1 ikonXC" onChange={(e: React.FormEvent) => handleFieldChange} />
        </span>
      </span>
    </span>
  </fieldset>
)
