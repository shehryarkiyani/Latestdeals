const slugify = (str) => {
    const slug = str
        .toLowerCase()
        .replace(/[^a-z0-9 -]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .replace(/^-/, '')
        .replace(/-$/, '');
    return slug;
    };

export default slugify;