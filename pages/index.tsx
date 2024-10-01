import { useState } from 'react';

const Home: React.FC = () => {
  const [bgColor, setBgColor] = useState<string>('bg-white');
  const [btnColor, setBtnColor] = useState<string>('bg-blue-600');
  const [isBouncing, setIsBouncing] = useState<boolean>(false); // New state to control bounce

  const changeBackground = () => {
    const randomGradient = `bg-gradient-to-r ${getRandomGradient()}`;
    setBgColor(randomGradient);

    const randomButtonColor = getRandomButtonColor();
    setBtnColor(randomButtonColor);

    // Trigger the bounce animation
    setIsBouncing(true);

    // Remove the bounce effect after the animation duration (e.g., 500ms)
    setTimeout(() => {
      setIsBouncing(false);
    }, 500);
  };

  const getRandomGradient = () => {
    const gradients = [
      'from-red-500 to-yellow-500',
      'from-blue-500 to-purple-500',
      'from-green-400 to-blue-500',
      'from-pink-500 to-orange-500',
      'from-purple-600 to-indigo-500',
      'from-teal-400 to-blue-500',
      'from-yellow-400 to-red-500',
      'from-green-300 to-green-600',
      'from-orange-400 to-red-500',
      'from-indigo-400 to-pink-500'
    ];
    return gradients[Math.floor(Math.random() * gradients.length)];
  };

  const getRandomButtonColor = () => {
    const colors = [
      'bg-blue-600',
      'bg-red-600',
      'bg-green-600',
      'bg-yellow-600',
      'bg-purple-600',
      'bg-pink-600',
      'bg-indigo-600',
      'bg-teal-600'
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <div className={`flex items-center justify-center h-screen ${bgColor}`}>
      <button
        onClick={changeBackground}
        className={`px-6 py-2 text-white ${btnColor} rounded hover:opacity-90 transition ${
          isBouncing ? 'animate-bounce' : ''
        }`}
      >
        Hello World
      </button>
    </div>
  );
};

export default Home;
