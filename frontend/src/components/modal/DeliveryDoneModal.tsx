import React from 'react';
import '../../style/modal/_Modal.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation} from "@fortawesome/free-solid-svg-icons";
import Modal from '../modal/DeliveryHistoryModal.tsx'

export default function DeliveryDoneModal(props:any)  {
  // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
  const { open, close, totalCost, userinfo, orderItems, wideClose } = props;

  const onCloseModal = (e:any) => {
    if (e.target === e.currentTarget){
      close();
      wideClose(false)
    }
  }

  const [ modalOpen, setModalOpen] = React.useState<boolean>(false);
  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    // 모달이 열릴때 openModal 클래스가 생성된다.
    <div className={open ? 'openModal modal' : 'modal'} onClick={onCloseModal}>
    {open ? (
      <section>
        <div style={{margin: "5%"}}>
          <div>
              <div className="icon">
                <FontAwesomeIcon  icon={faCircleExclamation} size="6x" color="#0064FF"/>
              </div>
              <header>
                  <p>배달 신청을 완료했어요</p>
              </header>
          </div>
          <main>
            <div style={{cursor: "pointer"}}>
              <div className="totalPrice" onClick={()=>{openModal();}}>신청 내역 확인</div>
            </div>
            <button onClick={()=> {close(); wideClose(false);}} >확인</button>
          </main>
        </div>
        <div>
            <Modal open={modalOpen}  close={closeModal} userinfo={userinfo} totalCost={totalCost} orderItems={orderItems} wideClose={wideClose} doneClose={close}>
            </Modal>
        </div>
      </section>
    ) : null}
    </div>
  );
}