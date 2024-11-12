import {ListItemComponent} from "../list-item/ListItem";
import {SlideModalBox} from "../slide-modal-box/SlideModalBox";

export interface HomeSliderProps {
    opened: boolean
    favouriteRoutes: ListItemComponent | ListItemComponent[]
    recentRoutes: ListItemComponent | ListItemComponent[]
}

export const HomeSlider = ({opened, favouriteRoutes, recentRoutes}: HomeSliderProps) => {
    return (
        <SlideModalBox>
            <div className={"flex flex-col gap-2"}>
                <p className={"text-p-bold pb-2"}>Favourite Routes</p>
                {favouriteRoutes}
            </div>
            {opened && <div className={"flex flex-col gap-2 mt-[24px]"}>
                <p className={"text-p-bold pb-2"}>Recent Routes</p>
                {recentRoutes}
            </div>}
        </SlideModalBox>
    )
}