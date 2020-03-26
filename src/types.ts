export interface restaurant {
    name: string; category: string; backgroundImageURL: string;
    location: { address: string; city: string; state: string, postalCode: string; lat: number; lng: number; }
    contact: { formattedPhone: string; twitter: string; }
}

export function defaultResturant(): restaurant {
    return {
        name: '', category: '', backgroundImageURL: '',
        location: { address: '', city: '', state: '', postalCode: '', lat: 0, lng: 0, },
        contact: { formattedPhone: '', twitter: '', }
    }
}
