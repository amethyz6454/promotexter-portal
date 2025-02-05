import EntryStyle from "@/styles/label-value.module.scss";
import classNames from "classnames";

const LabelAndValue = ({
    label,
    value,
    valueStatus,
    valueSeverity = "dark",
    isEnableHover = false,
}) => {
    return (
        <div
            className={classNames(EntryStyle.entry, {
                [EntryStyle.hover]: isEnableHover,
            })}
        >
            <p className={EntryStyle.label}>{label}</p>
            <small className={EntryStyle.value}>
                {value}{" "}
                {valueStatus && (
                    <small
                        className={classNames(
                            `text-${valueSeverity}`,
                            EntryStyle.feedback
                        )}
                    >
                        {valueStatus}
                    </small>
                )}
            </small>
        </div>
    );
};

export default LabelAndValue;
