import FieldStyle from "@/styles/text-field.module.scss";
import classNames from "classnames";
import { forwardRef, useState, useEffect } from "react";
import { Form, InputGroup } from "react-bootstrap";

const TextField = forwardRef((props, ref) => {
    const {
        adornmentEnd,
        adornmentEndButton = false,
        adornmentStart,
        adornmentStartButton = false,
        feedback,
        FormControlProps = {},
        id,
        isLabelPlaceholder = false,
        label,
        name,
        onChange,
    } = props;
    const [isFocused, setIsFocused] = useState(false);
    const [isFilled, setIsFilled] = useState(false);

    useEffect(() => {
        setIsFilled(
            FormControlProps.value
                ? FormControlProps.value.trim() !== ""
                : false
        );
    }, [FormControlProps.value]);

    const handleOnChange = (e) => {
        const hasValue = e.target.value.trim() !== "";
        setIsFilled(hasValue);
        if (onChange) {
            onChange(e);
        }
    };

    const handleOnBlur = () => {
        setIsFocused(false);
    };

    return (
        <Form.Group
            controlId={id}
            className={classNames(
                FieldStyle.group,
                { [FieldStyle.filled]: isFilled && isLabelPlaceholder },
                { [FieldStyle.focused]: isFocused && isLabelPlaceholder },
                { [FieldStyle.hasFeedback]: Boolean(feedback) }
            )}
        >
            <div className={FieldStyle.group}>
                {label && (
                    <Form.Label
                        className={classNames(
                            { [FieldStyle.placeholder]: isLabelPlaceholder },
                            { [FieldStyle.label]: !isLabelPlaceholder }
                        )}
                    >
                        {label}
                    </Form.Label>
                )}
                <InputGroup className={FieldStyle.inputGroup}>
                    {adornmentStart &&
                        (adornmentStartButton ? (
                            adornmentStart
                        ) : (
                            <InputGroup.Text>{adornmentStart}</InputGroup.Text>
                        ))}
                    <Form.Control
                        aria-describedby={label + "-0"}
                        aria-label={label}
                        className={FieldStyle.input}
                        name={name}
                        onBlur={handleOnBlur}
                        onChange={handleOnChange}
                        onFocus={() => setIsFocused(true)}
                        ref={ref}
                        size="lg"
                        {...FormControlProps}
                    />
                    {adornmentEnd &&
                        (adornmentEndButton ? (
                            adornmentEnd
                        ) : (
                            <InputGroup.Text>{adornmentEnd}</InputGroup.Text>
                        ))}
                </InputGroup>
            </div>
            {feedback && (
                <Form.Text className={FieldStyle.feedback}>
                    {feedback}
                </Form.Text>
            )}
        </Form.Group>
    );
});

export default TextField;
