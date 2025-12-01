import { useState, type ReactElement } from 'react';

import { motion, useMotionValue, useTransform } from 'motion/react';

interface CardRotateProps {
  children: React.ReactNode;
  onSendToBack: () => void;
  sensitivity: number;
}

function CardRotate({ children, onSendToBack, sensitivity }: CardRotateProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [60, -60]);
  const rotateY = useTransform(x, [-100, 100], [-60, 60]);

  function handleDragEnd(_: never, info: { offset: { x: number; y: number } }) {
    if (
      Math.abs(info.offset.x) > sensitivity ||
      Math.abs(info.offset.y) > sensitivity
    ) {
      onSendToBack();
    } else {
      x.set(0);
      y.set(0);
    }
  }

  return (
    <motion.div
      className="absolute cursor-grab"
      style={{ x, y, rotateX, rotateY }}
      drag
      dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
      dragElastic={0.6}
      whileTap={{ cursor: 'grabbing' }}
      onDragEnd={handleDragEnd}
    >
      {children}
    </motion.div>
  );
}

interface StackProps {
  randomRotation?: boolean;
  sensitivity?: number;
  cardDimensions?: { width: number; height: number };
  sendToBackOnClick?: boolean;
  children?: Array<ReactElement>;
  animationConfig?: { stiffness: number; damping: number };
}

export function CardStack(props: StackProps) {
  const randomRotation = props.randomRotation ?? false;
  const sensitivity = props.sensitivity ?? 200;
  const sendToBackOnClick = props.sendToBackOnClick ?? false;
  const cardDimensions = props.cardDimensions ?? { width: 260, height: 320 };
  const animationConfig = props.animationConfig ?? {
    stiffness: 260,
    damping: 20,
  };
  const [cards, setCards] = useState(
    props.children?.length
      ? props.children.map((component, index) => ({
          id: index,
          component,
        }))
      : []
  );

  const sendToBack = (id: number) => {
    setCards((prev) => {
      const newCards = [...prev];
      const index = newCards.findIndex((card) => card.id === id);
      const [card] = newCards.splice(index, 1);
      if (!card) return prev;
      newCards.unshift(card);
      return newCards;
    });
  };

  return (
    <div
      className="relative"
      style={{
        width: cardDimensions.width,
        height: cardDimensions.height,
        perspective: 600,
      }}
    >
      {cards.map(({ id, component }, index) => {
        const randomRotate = randomRotation ? Math.random() * 10 - 5 : 0;

        return (
          <CardRotate
            key={id}
            onSendToBack={() => sendToBack(id)}
            sensitivity={sensitivity}
          >
            <motion.div
              onClick={() => sendToBackOnClick && sendToBack(id)}
              animate={{
                rotateZ: (cards.length - index - 1) * 4 + randomRotate,
                scale: 1 + index * 0.06 - cards.length * 0.06,
                transformOrigin: '90% 90%',
              }}
              initial={false}
              transition={{
                type: 'spring',
                stiffness: animationConfig.stiffness,
                damping: animationConfig.damping,
              }}
              style={{
                width: cardDimensions.width,
                height: cardDimensions.height,
              }}
            >
              {component}
            </motion.div>
          </CardRotate>
        );
      })}
    </div>
  );
}
