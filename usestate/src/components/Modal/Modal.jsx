import style from './Modal.module.scss'

export function Modal({children}){

    return(
        <div className={style.modalStyling}>
            {children}
        </div>
    )
}