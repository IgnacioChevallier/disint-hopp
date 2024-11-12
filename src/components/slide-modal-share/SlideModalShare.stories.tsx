import { Meta, StoryObj } from "@storybook/react";
import SlideModalShare from "./SlideModalShare";

const meta: Meta<typeof SlideModalShare> = {
    title: "Components/SlideModalShare",
    component: SlideModalShare,
    parameters: {
        layout: "centered",
    },
};
export default meta;

type Story = StoryObj<typeof SlideModalShare>;

export const Default: Story = {
    args: {
    },


    render: (args) => {
        const sampleProfiles = [
            { name: "Luke", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRyymRQzlmlWpFUl2W506mVg1ttrBzwj19zA&s" },
            { name: "Leia", src: "https://lasdaoalplay.com/wp-content/uploads/2015/07/leia-princess-leia-organa-solo-skywalker-9301324-449-661.jpg" },
            { name: "Mr Vader", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtwe0AjhKwVvr1QfR8Hu14uKrIgzSF8JiV-Q&s" },
            { name: "Obi-wan", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSFJYvceCaoHXp0GSIdZrf7LXbKAQbFlAKtg&s" },
        ];

        return (
            <SlideModalShare profiles={sampleProfiles} />
        )
    },
};
