import { BackgroundContainer, MainContainer } from '../styled/PopupStyles';
import PopupContent from './PopupContent';

const Popup = (props) => {

  return (
    <MainContainer>
        <BackgroundContainer>
            <PopupContent 
                student={props.student}
                closePopup={props.closePopup}
                onEdit={props.onEdit}
                onAdd={props.onAdd}
                onDelete={props.onDelete}
                isNew={props.isNew}
            />
        </BackgroundContainer>
    </MainContainer>
    
  );
}

export default Popup;
