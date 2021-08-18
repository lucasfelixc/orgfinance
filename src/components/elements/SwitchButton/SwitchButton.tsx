import { CheckBoxWrapper, CheckBoxLabel, CheckBox } from './SwitchButton.style';

interface SwitchButton {
  checked: boolean;
  onChange: () => any;
}

const SwitchButton: React.FC<SwitchButton> = ({ checked, onChange }) => {
  return (
    <CheckBoxWrapper>
      <CheckBox
        id="checkbox"
        type="checkbox"
        checked={checked}
        onChange={() => onChange()}
      />
      <CheckBoxLabel htmlFor="checkbox" />
    </CheckBoxWrapper>
  );
};

export default SwitchButton;
