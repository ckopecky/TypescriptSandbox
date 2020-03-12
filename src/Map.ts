
//instructions to every other class on how they can be an argument to the addMarker method

//this is called an implicit check

interface MappableClass {
    location: {
        lat: number;
        lng: number;
    };
}

class CustomMap {
    private googleMap: google.maps.Map;

    constructor(element: HTMLElement) {
        this.googleMap = new google.maps.Map(element, {
            zoom: 1,
            center: {
                lat: 0,
                lng: 0
            }
        });
    }

    addMarker(element: MappableClass): void {
        const marker = new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: element.location.lat,
                lng: element.location.lng
            }
        });

        marker.addListener('click', () => {
            const infoWindow = new google.maps.InfoWindow({
                content: 'Hi there!'
            });
            
            infoWindow.open(this.googleMap, marker);
        })
    }
}

export default CustomMap;



