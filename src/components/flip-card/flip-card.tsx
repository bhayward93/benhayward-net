"use client"

import { ComponentProps, ReactNode, useState } from 'react';
import { MotionTouchGestureIcon } from '../icons/animated-icons';
import ReactCardFlip from 'react-card-flip';

/** Flip card props. */
type FlipCardProps = Pick<ComponentProps<"div">, 'children' | 'className'> & { title: string, description?: string, showTouchIconMobile?: boolean};

/**
 * Flip card component. Animated card that will flip on mouseover or mobile tap, from front card to back card.
 * @param { FlipCardProps } props - component props.  
 * @returns { ReactNode } flip card component.
 */
export const FlipCard = ({children, className, title, description, showTouchIconMobile}: FlipCardProps): ReactNode => {
    const [isFlipped, setIsFlipped] = useState(false);
  
    return (
        <div className="flex justify-center" onMouseEnter={() => setIsFlipped(true)} onMouseLeave={() => setIsFlipped(false)}>
            <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
                <FlipCardFront className={className} showTouchIconMobile={showTouchIconMobile ?? false}>
                    {children}
                </FlipCardFront>
                <FlipCardBack className={className} title={title} description={description}/>
            </ReactCardFlip>
        </div>
    );
}

/** Flip card front props. */
type FlipCardFrontProps =  Pick<ComponentProps<"div">, 'children' | 'className'> & { showTouchIconMobile: boolean };

/**
 * Front-side of the flip card component.
 * @param { FlipCardFrontProps } props - component props.  
 * @returns { ReactNode } flip card front-side component.
 */
const FlipCardFront = ({children, className, showTouchIconMobile}: FlipCardFrontProps): ReactNode => {
    return (
        <div className={`flex items-center justify-center ${className}`}>
            {showTouchIconMobile &&
                <MotionTouchGestureIcon
                    className="block lg:hidden absolute right-4 top-4 w-[40px]"
                ></MotionTouchGestureIcon>
            }
            {children}
        </div>
    )
}

/** Flip card back props. */
type FlipCardBackProps =  Pick<ComponentProps<"div">, 'className'> & { title: string, description?: string };

/**
 * Back-side of the flip card component.
 * @param { FlipCardFrontProps } props - component props.  
 * @returns { ReactNode } flip card back-side component.
 */
const FlipCardBack = ({className, title, description}: FlipCardBackProps): ReactNode => {
    return (
        <div className={`flex flex-col items-start justify-center ${className} px-12 text-black`}>
            <h2 className="font-heading-bold text-2xl 4xl:text-4xl mb-4">{title}</h2>
            {description && 
                <p className='font-body-regular text-md 4xl:text-2xl'>{description}</p>
            }
        </div>
    )
}
  