/* Public release metadata only. Never substitute another platform's download. */
(async () => {
    const allowed = {
        'wallaby-popcorn': /\.(apk|aab|sha256|sha256sum|sha256sums|txt)$/i,
        'wallaby-popcorn-desktop': /\.(deb|AppImage|exe|msi|dmg|pkg|zip|sha256|sha256sum|sha256sums|txt)$/i
    };
    await Promise.all([...document.querySelectorAll('[data-repo]')].map(async section => {
        const repo = section.dataset.repo;
        if (!Object.hasOwn(allowed, repo)) return;
        const status = section.querySelector('.release-status'), list = section.querySelector('.release-files');
        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 10000);
        try {
            const response = await fetch(`https://api.github.com/repos/bluesilent9/${repo}/releases?per_page=10`, {
                signal: controller.signal, credentials: 'omit', headers: { Accept: 'application/vnd.github+json' }
            });
            if (!response.ok) throw new Error('Release listing unavailable');
            const releases = await response.json();
            if (!Array.isArray(releases)) throw new Error('Invalid release listing');
            let count = 0;
            for (const release of releases) {
                if (release.draft) continue;
                for (const asset of release.assets || []) {
                    const url = new URL(asset.browser_download_url);
                    if (url.protocol !== 'https:' || url.hostname !== 'github.com' ||
                        !url.pathname.startsWith(`/bluesilent9/${repo}/releases/download/`) || !allowed[repo].test(asset.name)) continue;
                    const row = document.createElement('li'), link = document.createElement('a'), info = document.createElement('small');
                    link.href = url.href; link.textContent = asset.name;
                    info.textContent = `${release.tag_name} · ${release.prerelease ? 'Prerelease' : 'Release'} · ${(Number(asset.size) / 1048576).toFixed(1)} MB`;
                    row.append(link, info); list.append(row); count++;
                }
            }
            status.textContent = count ? `${count} published file${count === 1 ? '' : 's'}. Check the version and platform before installing.` :
                repo === 'wallaby-popcorn' ? 'No public APK release files yet. Stable and Development source are linked above.' :
                    'No public desktop release files yet. The first Ubuntu 26.04 DEB build is pending.';
        } catch (_) {
            status.textContent = 'The release list is temporarily unavailable. Open the GitHub releases link below to check downloads.';
        } finally { clearTimeout(timeout); }
    }));
})();
