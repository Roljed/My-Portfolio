import React from 'react';

export default function SectionHeading({ title }: { title: string }) {
    return (
        <h2 className="text-3xl font-medium capitalize mb-8 text-center">{title}</h2>
    )
}