import {Button} from "../button/Button";

export const ConfirmStopModal = () => {
    return(
       <div className={"min-w-[371px] min-h-[69px] bg-gray-700 py-[8px] px-[12.5px] flex flex-row items-center rounded-[8px] gap-[20px]"}>
           <div className={"min-w-[136px] min-h-[32px] flex items-center justify-center"}>
               <p className={"text-white text-p-regular"}>Confirm Stop?</p>
           </div>
           <div className={"min-w-[210px] max-h-[51px] py-[7px] gap-[10px] flex flex-row justify-center"}>
               <Button text={"Cancel"} size={"medium"} variant={"contained"} color={"danger"} rounded={"full"}/>
               <Button text={"Confirm"} size={"medium"} variant={"contained"} color={"primary"} rounded={"full"}/>
           </div>
       </div>
    )
}