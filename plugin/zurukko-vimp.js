var INFO = xml`
<plugin name="zurukko-vimp.js"
        version="0.1"
        summary="Read current page with zurukko"
        href="http://github.com/naoty/zurukko-vimp"
        xmlns="http://vimperator.org/namespaces/liberator">

        <author email="naoty.k@gmail.com">Naoto Kaneko</author>
        <license href="http://opensource.org/licenses/mit-license.php">MIT</license>
        <project name="Vimperator" minVersion="3.3"/>
        <p>Read current page with zurukko</p>
        <item>
            <tags>"zurukko"</tags>
            <spec>:zurukko</spec>
            <description>
                <p>Read current page with zurukko</p>
            </description>
        </item>
</plugin>`;

(function () {
    var name = "zurukko";
    var desc = "Read current page with zurukko";
    var command = function (args) {
        var location = content.document.location;
        var newURL = location.protocol + location.host + ".zurukko.jp" + location.pathname;
        liberator.open(newURL);
    };

    commands.addUserCommand([name], desc, command);
})();
