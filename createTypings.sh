#!/bin/sh

rm ./components.d.ts

cat ./lib/components/atoms/button/Button.jsx | ./node_modules/.bin/react2dts --name "currstyles/lib/components/atoms/button/Button" >> ./components.d.ts
cat ./lib/components/atoms/date/AppDate.jsx | ./node_modules/.bin/react2dts --name "currstyles/lib/components/atoms/date/AppDate" >> ./components.d.ts
cat ./lib/components/atoms/dropdown/Dropdown.jsx | ./node_modules/.bin/react2dts --name "currstyles/lib/components/atoms/dropdown/Dropdown" >> ./components.d.ts
cat ./lib/components/atoms/header/Header.jsx | ./node_modules/.bin/react2dts --name "currstyles/lib/components/atoms/header/Header" >> ./components.d.ts
cat ./lib/components/atoms/input/Input.jsx | ./node_modules/.bin/react2dts --name "currstyles/lib/components/atoms/input/Input" >> ./components.d.ts
cat ./lib/components/atoms/message/Message.jsx | ./node_modules/.bin/react2dts --name "currstyles/lib/components/atoms/message/Message" >> ./components.d.ts
cat ./lib/components/molecules/input_label/InputLabel.jsx | ./node_modules/.bin/react2dts --name "currstyles/lib/components/molecules/input_label/InputLabel" >> ./components.d.ts
cat ./lib/components/molecules/input_dropdown/InputDropdown.jsx | ./node_modules/.bin/react2dts --name "currstyles/lib/components/molecules/input_dropdown/InputDropdown" >> ./components.d.ts
