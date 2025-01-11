'use client';
import { useInView, motion } from 'framer-motion';
import { ReactNode, useRef } from 'react';

type MotionProps = {
    phrases: string[];
    tag: string;
    amount?: number;
    children: ReactNode
}

const Text = ({ phrases, tag, amount, }: MotionProps) => {

    const body = useRef(null);
    const isInView = useInView(body, { once: true, amount: amount ?? 0.4 });
    const animate = {
        initial: { y: '100%', },
        open: (i: number) => ({
            y: '0%', transition: { duration: 1, delay: 0.15 * i, ease: [0.33, 1, 0.68, 1] },
        }),
    };
    return (
        <div ref={body}>
            {phrases.map((phrase, index) => {
                return (
                    <div key={index} className="overflow-hidden">
                        {tag === 'h1' ? (
                            <motion.h1
                                variants={animate}
                                initial="initial"
                                animate={isInView ? 'open' : ''}
                                custom={index}
                                className="max-h-[7.75rem]"
                            >
                                {phrase}
                            </motion.h1>
                        ) : tag === 'h2' ? (
                            <motion.h2
                                variants={animate}
                                initial="initial"
                                animate={isInView ? 'open' : ''}
                                custom={index}
                            >
                                {phrase}
                            </motion.h2>
                        ) : tag === 'h3' ? (
                            <motion.h3
                                variants={animate}
                                initial="initial"
                                animate={isInView ? 'open' : ''}
                                custom={index}
                            >
                                {phrase}
                            </motion.h3>
                        ) : (
                            <motion.p
                                variants={animate}
                                initial="initial"
                                animate={isInView ? 'open' : ''}
                                custom={index}
                            >
                                {phrase}
                            </motion.p>
                        )}
                    </div>
                );
            })}
        </div>
    );
};

export default Text;
