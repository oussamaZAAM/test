import React from 'react';
import '../styles/CircularProgressBar.css';

interface CircularProgressBarProps {
  percentage: number;
  strokeWidth?: number;
  clicked: boolean;
}

const CircularProgressBar: React.FC<CircularProgressBarProps> = ({
  percentage,
  strokeWidth = 5,
  clicked
}) => {
  const radius = 35;
  const circumference = 2 * Math.PI * radius;
  const progressOffset = circumference - (percentage / 100) * circumference;

  return (
    <svg className="block" width={radius * 2} height={radius * 2}>
      <circle
        className={"fill-none " + (clicked ? "stroke-[#dfe6fd]" : "stroke-zinc-200")}
        cx={radius}
        cy={radius}
        r={radius - strokeWidth}
        strokeWidth={strokeWidth}
      />
      <circle
        className={"fill-none progress-bar "+(clicked ? "stroke-white" : "stroke-main-500")}
        cx={radius}
        cy={radius}
        r={radius - strokeWidth}
        strokeWidth={strokeWidth}
        strokeDasharray={circumference}
        strokeDashoffset={progressOffset}
      />
      <text className="font-md font-bold" x={radius} y={radius} dominantBaseline="central" textAnchor="middle" fill={clicked ? "white" : "black"}>
        {percentage}%
      </text>
    </svg>
  );
};

export default CircularProgressBar;