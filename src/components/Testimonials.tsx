"use client";

import React from "react";
import { Star, ArrowUpRight, CheckCircle2, Quote } from "lucide-react";
import { AnimatedSection } from "./AnimatedSection";
import { portfolioData, Testimonial } from "@/data/portfolioData";

export function Testimonials() {
  const testimonials = portfolioData.testimonials || [];
  const fiverrUrl = portfolioData.contact.fiverrUrl;

  return (
    <section id="testimonials" className="testimonials-section section-wrap">
      <AnimatedSection className="section-heading">
        <div>
          <span className="eyebrow">04 / CLIENT IMPACT & REVIEWS</span>
          <h2>
            PROVEN RESULTS<span className="accent">.</span>
          </h2>
        </div>
        <a
          href={fiverrUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-link"
          aria-label="Read 600+ reviews on Fiverr"
        >
          600+ REVIEWS ON FIVERR
          <ArrowUpRight size={21} />
        </a>
      </AnimatedSection>

      <div className="testimonials-grid">
        {testimonials.map((item: Testimonial, idx: number) => (
          <AnimatedSection
            key={item.author + item.store}
            className="testimonial-card"
            delay={idx * 0.08}
          >
            <div className="testimonial-card-top">
              <div className="testimonial-stars" aria-label={`${item.stars} out of 5 stars`}>
                {Array.from({ length: item.stars }).map((_, i) => (
                  <Star key={i} size={15} className="star-filled" fill="#ef4151" stroke="#ef4151" />
                ))}
              </div>
              <span className="testimonial-platform-tag">{item.platform}</span>
            </div>

            {item.roi && (
              <div className="testimonial-roi-pill">
                <span className="roi-dot" />
                <span>{item.roi}</span>
              </div>
            )}

            <blockquote className="testimonial-quote">
              <Quote size={20} className="testimonial-quote-icon" aria-hidden="true" />
              <p>“{item.quote}”</p>
            </blockquote>

            <div className="testimonial-footer">
              <div className="testimonial-author-meta">
                <span className="testimonial-author-name">{item.author}</span>
                <span className="testimonial-author-role">
                  {item.role} · <strong>{item.store}</strong>
                </span>
              </div>
              {item.verified && (
                <span className="testimonial-verified" title={item.verified}>
                  <CheckCircle2 size={13} />
                  <span>{item.verified}</span>
                </span>
              )}
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}
