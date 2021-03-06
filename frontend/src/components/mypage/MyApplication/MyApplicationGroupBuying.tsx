import React, { useEffect, useState } from 'react';

import "../../../style/_myApplicationDelivery.scss"
import Modal from '../../modal/_ApplyHistoryModal1.tsx';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from "@fortawesome/free-solid-svg-icons";

import axios, {AxiosResponse} from "axios";

import { useSelector } from 'react-redux';
import RootState from "../../../reducer/reducers.tsx"

import {groupBuyingRecordDataType} from "../../../actions/_interfaces.tsx"

function MyApplicationGroupBuying() {
    const [ myApplicationGroupBuyingData, setMyApplicationGroupBuyingData ] = useState<groupBuyingRecordDataType[]>([]);
    const [ propsModalData, setPropsModalData] = useState<groupBuyingRecordDataType>(null);
    const userId = useSelector((state:RootState) =>{
        return state.accounts.data.user.id
    })

    const getapplicationdata = () =>{
        axios.get(`/order-service/user/${userId}/ORDER_GROUP`)
        .then((response:AxiosResponse) => {
        setMyApplicationGroupBuyingData(response.data)
        })
    }
    
    useEffect(()=>{
        getapplicationdata()
    },[])

    const [ modalOpen, setModalOpen] = React.useState<boolean>(false);
    const openModal = (d:groupBuyingRecordDataType) => {
        setModalOpen(true);
        setPropsModalData(d)
    };

    const closeModal = () => {
        setPropsModalData(null);
        setModalOpen(false);
    };
    return (
        <div>
            <div className='outBox'>
                {myApplicationGroupBuyingData.map((data:groupBuyingRecordDataType, index:number)=>(
                    <div key={index} className='madeliverycard'>
                        <div>
                            <div>{data.boardDto.productName}</div>
                            <div onClick={()=>{openModal(data)}}>
                                <FontAwesomeIcon icon={faFile} /> 내역보기
                            </div>
                        </div>
                        <div>
                            <div>수령지</div>
                            <div>{data.boardDto.pickupLocation}</div>
                        </div>
                    </div>
                ))}
            </div>
            <div>
                <Modal open={modalOpen}  close={closeModal} info={propsModalData}>
                </Modal>
            </div>
        </div>
    );
}

export default MyApplicationGroupBuying;