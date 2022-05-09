import React, { useState } from 'react';

import "../../../style/_myApplicationDelivery.scss"
import Modal from '../../modal/_ApplyHistoryModal.tsx';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from "@fortawesome/free-solid-svg-icons";

import axios, {AxiosResponse, AxiosError} from "axios";


const data = [{title:"갓김치1", arrive:"우리집1222222222222222222222222222222222"}, {title:"갓김치2", arrive:"우리집23333333333333333333333333333333"}, {title:"갓김치3", arrive:"우리집 이층 삼층 사층 오층 1"}]

function MyApplicationDelivery() {
    const [ myApplicationDeliveryData, setMyApplicationDeliveryData ] = useState([]); 
    const [ modalOpen, setModalOpen] = React.useState(false);

    const getapplicationdata = () =>{
        axios.get(`/order-service/user/${userId}`)
        .then((response:AxiosResponse) => {
        console.log(response, "채팅 데이터 가져오기");
        setMyApplicationDeliveryData(response.data)
        })
        .catch((error:AxiosError) => {
        console.log(error, "에러");
        })
    }

    const openModal = () => {
        setModalOpen(true);
    };
    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <div>
            <div>
                {data.map((d, index)=>(
                    <div className='madeliverycard'>
                        <div>
                            <div>{d.title}</div>
                            <div onClick={openModal}>
                                <FontAwesomeIcon icon={faFile} /> 내역보기
                            </div>
                        </div>
                        <div>
                            <div>수령지</div>
                            <div>{d.arrive}</div>
                        </div>
                    </div>
                ))}            
            </div>
            
            <div>
                <Modal open={modalOpen}  close={closeModal} info={data}>
                </Modal>
            </div>
            
        </div>
    );
}

export default MyApplicationDelivery;