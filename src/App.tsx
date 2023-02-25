import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import { Donut } from './components/Donut';
import { Gradient } from './global/Types';

function App() {
  const [percentage, setPercentage] = useState(70);
  const [gradientRotation, setGradientRotation] = useState(0);
  const [strokeWidth, setStrokeWidth] = useState(4);
  const [showCode, setShowCode] = useState(false);
  const [inputColor, setInputColor] = useState('#000000');
  const [gradientList, setGradientList] = useState<Gradient[]>([
    { offset: 16, stopColor: '#CE9FFC' },
    { offset: 85, stopColor: '#7367F0' },
  ]);

  const handleSlider = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value: number = parseInt(event.target.value);
    setPercentage(value);
  };
  const handleSliderStroke = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value: number = parseInt(event.target.value);
    setStrokeWidth(value);
  };
  const handleGradientRotation = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value: number = parseInt(event.target.value);
    setGradientRotation(value);
  };

  const handleShowCode = () => setShowCode((prev) => !prev);

  const handleNewColor = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setInputColor(value);
  };

  const handleAddNewColor = () => {
    const colorToAdd: Gradient = { offset: 0, stopColor: inputColor };
    setGradientList((prev) => [...prev, colorToAdd]);
  };

  const handleDeleteGradient = (event: React.FormEvent<HTMLButtonElement>) => {
    const { gradientIndex } = event.currentTarget.dataset;
    console.log(gradientIndex);

    const index = Number(gradientIndex);
    const newList = [...gradientList];
    newList.splice(index, 1);

    setGradientList(newList);
  };

  const handleOffsetEdit = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const { gradientIndex } = event.target.dataset;
    const index = Number(gradientIndex);
    const newList = [...gradientList];
    newList[index].offset = parseInt(value);

    setGradientList(newList);
  };

  return (
    <div className="app">
      <div className="color-list">
        <div className="color-list__form">
          <input type="color" onChange={handleNewColor} value={inputColor} />
          <button onClick={handleAddNewColor}>add</button>
        </div>
        <ul>
          {gradientList.map((gradient, index) => {
            return (
              <li key={`gradientItem-${index}`}>
                <span style={{ backgroundColor: gradient.stopColor }} />
                <input
                  data-gradient-index={index}
                  onChange={handleOffsetEdit}
                  value={gradient.offset}
                  type={'number'}
                />
                {gradient.stopColor}
                <button
                  data-gradient-index={index}
                  onClick={handleDeleteGradient}
                >
                  X
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      <Donut
        percentage={percentage}
        strokeWidth={strokeWidth}
        showCode={showCode}
        gradients={gradientList}
        gradientRotation={gradientRotation}
      />

      <div className="">
        <label htmlFor="">Porcentagem</label>
        <input
          type="range"
          onChange={handleSlider}
          min={0}
          max={100}
          value={percentage}
        />
      </div>
      <div className="">
        <label htmlFor="">Largura da linha</label>
        <input
          type="range"
          onChange={handleSliderStroke}
          min={1}
          max={4}
          value={strokeWidth}
        />
      </div>
      <div className="">
        <label htmlFor="">Rotação do Gradiente</label>
        <input
          type="range"
          onChange={handleGradientRotation}
          min={0}
          max={360}
          value={gradientRotation}
        />
      </div>
      <button onClick={handleShowCode}>{`${
        showCode ? `Ocultar` : `Exibir`
      } código`}</button>
    </div>
  );
}

export default App;
