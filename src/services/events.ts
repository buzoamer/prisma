"use server"
import { prisma } from "@/lib/prisma";
import {EventData} from '@/app/events/create/page'
import { DataEvent } from "@/app/events/page";

export async function create(data: EventData) {

  const event = await prisma.event.create({
    data: {
      title: data.title,
      short_description: data.short_description,
      content: data.content,
      created_by: 1
    },
  });
  return {status: 200, message: 'Event successfully created!'};
}

export async function fetchAllEvents() {
  try {
    const event = await prisma.event.findMany()
    
    if (event.length === 0) {
      return { status: 404, message: 'No events found' };
    }
    
    return { status: 200, message: 'Events found', event };
  } catch (error) {
    console.error('Error fetching events:', error);
    return { status: 500, message: 'Error fetching events' };
  }
}

export async function fetchOneEvent(data: DataEvent) {
  try {
    const event = await prisma.event.findUnique({
      where:{
        id: data.id
      }
    })
    
    if (!event) {
      return { status: 404, message: 'No events found' };
    }
    
    return { status: 200, message: 'Events found', event };
  } catch (error) {
    console.error('Error fetching events:', error);
    return { status: 500, message: 'Error fetching events' };
  }
}

export async function update(data: DataEvent) {
  try {
    const event = await prisma.event.update({
      where:{
        title: data.title
      },
      data:{
        title: data.title,
        short_description: data.short_description,
        content: data.content
      }
    })
    
    if (!event) {
      return { status: 404, message: 'No events found' };
    }
    
    return { status: 200, message: 'Events found', event };
  } catch (error) {
    console.error('Error fetching events:', error);
    return { status: 500, message: 'Error fetching events' };
  }
}

