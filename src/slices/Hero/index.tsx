'use client";';
import { FC } from "react";
import { asText, Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { PrismicNextLink, PrismicNextImage } from "@prismicio/next";
import { Bounded } from "@/components/Bounded";
import Button from "@/components/Button";
import { TextSplitter } from "@/components/TextSplitter";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero: FC<HeroProps> = ({ slice }) => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="hero"
    >
      <div className="grid">
        <div className="grid h-screen place-items-center">
          <div className="grid auto-rows-min place-items-center text-center">
            <h1 className="hero-header text-5xl font-black uppercase leading-[0.8] text-lime-100 sm:text-[5rem] md:text-[9rem] lg:text-[13rem]">
              <TextSplitter text={asText(slice.primary.heading)} wordDisplayStyle="block" className="hero-header-word"/>
            </h1>
            <h1 className="hero-header-low pt-2 text-5xl font-black uppercase leading-[0.8] text-lime-100 sm:text-[5rem] md:text-[8rem] lg:text-[12rem]">
              <TextSplitter className="hero-header-low-word" text={asText(slice.primary.heading_low)} wordDisplayStyle="inline-block"/>
            </h1>
            <div className="hero-subheading text-3xl font-semibold text-amber-50 sm:text-[2rem] md:text-[3rem] lg:text-5xl mt-12">
              <PrismicRichText field={slice.primary.subheading} />
            </div>
            <div className="hero-body text-2xl font-normal text-amber-50 sm:text-[1.25rem] md:text-[1.5rem] lg:text-2xl mt-0.5">
              <PrismicRichText field={slice.primary.body} />
            </div>
            <Button
          buttonLink={slice.primary.button_link}
          buttonText={slice.primary.button_text}
          className="hero-button mt-6 "
        />
          </div>
        </div>

        <div className="grid text-side relative z-[80] h-screen items-center gap-4 md:grid-cols-2">

          <PrismicNextImage className="w-full md:hidden" field={slice.primary.jar_image} />
          <div>
          <h2 className="text-side-heading text-balance text-6xl uppercase font-black text-amber-100 lg:text-6xl  ">
            <TextSplitter text={asText(slice.primary.second_heading)} wordDisplayStyle="inline-block" className="text-side-heading-word"/>
          </h2>
          <div className="text-side-body max-w-xl  text-xl font-normal text-amber-50 sm:text-[1.25rem] md:text-[1.5rem] lg:text-2xl mt-0.5 text-balance">
            <PrismicRichText field={slice.primary.second_body} />
          </div>
          </div>
        </div>
      </div>
    </Bounded>
  );
};

export default Hero;
