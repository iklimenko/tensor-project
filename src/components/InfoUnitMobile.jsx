import { Input, InfoCell } from '../styled/PopupMobileStyles';


const InfoUnitMobile = (props) => {

    return (
        <InfoCell>
            <img 
                height={ props.height || "13px" } 
                width="13px" 
                src={props.src} 
                alt="Аватар"
            />
            <Input 
                type={props.type} 
                defaultValue={props.value}
                onChange={e => props.change(e)}
            />
        </InfoCell>
    )
}

export default InfoUnitMobile