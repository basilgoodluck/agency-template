import React from 'react';
import styles from './timeline.module.css';

const AngleCurveDemo: React.FC = () => {
  const connections = [
    { id: 1, direction: 'up', color: '#ff6f61', label: '1 Week' }, // Red
    { id: 2, direction: 'down', color: '#ffb347', label: '1 Month' }, // Orange
    { id: 3, direction: 'up', color: '#ffcc5c', label: '2 Months' }, // Yellow
    { id: 4, direction: 'down', color: '#88d8b0', label: '3 Months' }, // Green
    { id: 5, direction: 'up', color: '#6a9fb5', label: '6 Months' }, // Blue
    { id: 6, direction: 'down', color: '#aa759f', label: '12 Months' }, // Purple
  ];

  return (
    <div className={styles.container}>
      <div className={styles.horizontalLine}></div>
      <div className={styles.connectionsWrapper}>
        {connections.map((conn) => (
          <div key={conn.id} className={styles.connectionContainer}>
            <div className={`${styles.verticalLine} ${styles[conn.direction]}`}>
              <div className={styles.curve}></div>
            </div>
            <div className={styles.intersectionCircle} style={{ backgroundColor: conn.color }}>
              <div className={styles.intersectionInnerCircle}>
                {conn.label}
              </div>
            </div>
            <div className={`${styles.endPoint} ${styles[`endpoint-${conn.direction}`]}`}>
              {conn.id}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AngleCurveDemo;