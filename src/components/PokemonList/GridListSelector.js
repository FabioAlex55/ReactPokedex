export const GridListSelector = props => {
    const { view, changeHandler } = props
    return (
        <>
            <label>
                <input
                checked={view === 'list'}
                type="radio"
                name="view"
                value="list"
                onChange={changeHandler}
                />
                List view
            </label>
            <label>
                <input
                    checked={view === 'grid'}
                    type="radio"
                    name="view"
                    value="grid"
                    onChange={changeHandler}
                />
                Grid view
            </label>
        </>
    )
}