import { Input, Label, InfoCell } from '../styled/PopupStyles';

const InfoUnit = (props) => {

    return(
        <InfoCell>
        <Label
            style={props.labelStyle}
        >{props.label}</Label>
        <Input
            style={props.inputStyle} 
            type={props.type} 
            defaultValue={props.value}
            onChange={e => props.change(e)}
        />
    </InfoCell>
    )
}

export default InfoUnit