import ActionButton from "@/components/common/action-button";
import ColorPanel from "@/components/common/color-panel";
import CustomInput from "@/components/common/custom-input";
import { ArrowLeftIcon, CheckIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const TodoItemEdit = () => {
    return (
        <div className="">
            <div className="mb-8">
                <Link href={"/"}>
                    <span>
                        <ArrowLeftIcon className="h-4 w-4 text-white" />
                    </span>
                </Link>
            </div>
            <div className="flex flex-col gap-4">
                <CustomInput
                    placeholder="Ex. Brush you teeth"
                    label="Title"
                    value=""
                />
                <ColorPanel />
            </div>
            <ActionButton label="Save" icon={<CheckIcon className="h-4 w-4" />} className="mt-8" />
        </div>
    )
}

export default TodoItemEdit;