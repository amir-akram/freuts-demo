import { LinkField } from '@prismicio/client'
import { PrismicNextLink } from '@prismicio/next'
import { clsx } from 'clsx';

type Props = {
    buttonLink: LinkField;
    buttonText: string | null;
    className?: string;

}

function Button({buttonLink, buttonText, className}: Props) {
  return (
     <PrismicNextLink field={buttonLink} className={clsx("rounded-xl bg-lime-300 px-4 py-2 text-center text-xl uppercase tracking-wide font-bold text-green-700 hover:bg-lime-400 transition-colors duration-150 ", className)}>
              {" "}
              {buttonText}{" "}
            </PrismicNextLink>
  )
}

export default Button