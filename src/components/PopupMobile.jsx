import { BackgroundContainer, MainContainer } from '../styled/PopupMobileStyles';
import PopupContentMobile from './PopupContentMobile';


const Popup = (props) => {

  return (
    <MainContainer>
        <BackgroundContainer>
            <PopupContentMobile
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
