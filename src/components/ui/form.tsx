"use client"
import { DataEvent } from '@/app/events/page';
import React from 'react'
import { useForm } from 'react-hook-form';
import { update } from '@/services/events'
import { useRouter } from 'next/navigation';

export default function Form({data}: any) {
    const { event, status, message } = data
    
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<DataEvent>({
        defaultValues: {
            title:event?.title,
            short_description: event?.short_description,
            content: event?.content
        }, values: event
    });
    const router = useRouter();
    const onSubmit = async (data: DataEvent) => {
        console.log(data)
        const updatedEvent = await update(data);
        if (updatedEvent.status === 200) {
            router.push('/events');
            console.log('Event updated successfully');
        } else {
            console.log('Error updating event:', updatedEvent.message);
        }
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
                <label className="block font-medium">New title</label>
                <input
                    type="text"
                    id="title"
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                    placeholder="Enter the new title"
                    {...register('title')}
                />
                <p className="text-red-500"></p>
            </div>

            <div className="mb-4">
                <label htmlFor="shortDescription" className="block font-medium">Short description</label>
                <textarea
                    id="shortDescription"
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                    rows={3}
                    placeholder="Describe the event"
                    {...register('short_description')}
                ></textarea>
                <p className="text-red-500"></p>
            </div>

            <div className="mb-4">
                <label htmlFor="content" className="block font-medium">Content</label>
                <textarea
                    id="content"
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                    rows={12}
                    placeholder="Enter post content"
                    {...register('content')}>
                </textarea>
                <p className="text-red-500"></p>
            </div>

            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-md">Commit changes</button>
        </form>

    )
}
