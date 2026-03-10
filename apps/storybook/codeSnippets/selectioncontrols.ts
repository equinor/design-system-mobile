export const radioButtons = `const [selectedRadio, setSelectedRadio] = useState<number>(0);

<View>
  <Radio
    checked={selectedRadio === 0}
    onPress={() => setSelectedRadio(0)}
    label="Option A"
  />
  <Radio
    checked={selectedRadio === 1}
    onPress={() => setSelectedRadio(1)}
    label="Option B"
  />
  <Radio
    checked={selectedRadio === 2}
    onPress={() => setSelectedRadio(2)}
    label="Option C"
  />
</View>

{/* Without label */}
const [selectedRadioNoLabel, setSelectedRadioNoLabel] = useState<number>(0);

<Radio
  checked={selectedRadioNoLabel === 0}
  onPress={() => setSelectedRadioNoLabel(0)}
/>

{/* Disabled */}
<Radio checked={true} disabled label="Disabled checked" />`;

export const switchControl = `const [switchActive, setSwitchActive] = useState(false);

<Switch
  active={switchActive}
  onChange={setSwitchActive}
  color="primary"
/>

{/* Small variant */}
<Switch.Small
  active={switchActive}
  onChange={setSwitchActive}
/>

{/* Disabled */}
<Switch
  active={true}
  disabled
  color="primary"
/>`;
