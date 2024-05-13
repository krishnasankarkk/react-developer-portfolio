class DemoCarousel {
    render() {
        return (
            <div>
                <div className='flex items-center justify-center'>
                    <img className='w-96 ' src="projects/kwikmart.png" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="projects/kwikmart.png" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="projects/kwikmart.png" />
                    <p className="legend">Legend 3</p>
                </div>
            </div>
        );
    }
}

export default DemoCarousel