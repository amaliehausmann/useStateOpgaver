import style from './ModalWrapper.module.scss'
export function ModalWrapper({close}){

    return(
        <div onClick={close} className={style.modalDiv}>

        </div>
    )
}