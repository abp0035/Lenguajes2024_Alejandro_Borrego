<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:output method="html" indent="yes"/>

    <xsl:template match="/">
        <html>
            <head>
                <title>Estado del Concesionario</title>
                <style>
                    body { 
                        font-family: Arial, sans-serif; 
                        color: darkgreen; 
                        text-align: center; 
                    }
                    .contenedor {
                        width: 80%; 
                        margin: auto; 
                    }
                    h1, h2 {
                        text-align: center;
                        font-weight: bold;
                    }
                    hr {
                        width: 80%; 
                        margin: 15px auto; 
                        border: 1px solid darkgreen;
                    }
                    table {
                        width: 80%;
                        margin: auto;
                        border-collapse: collapse;
                    }
                    th, td {
                        border: 1px solid black; 
                        padding: 8px;
                        text-align: center;
                    }
                    th {
                        background-color: lightgray;
                    }
                </style>
            </head>
            <body>
                <div class="contenedor">
                    <h1>Estado del Concesionario</h1>
                    <hr/>
                    <h2>Tenemos un total de <xsl:value-of select="count(concesionario/coche)"/> vehículos</h2>
                    <h2>Valorados en <xsl:value-of select="sum(concesionario/coche/precio)"/> Euros (sin IVA)</h2>
                    <hr/>
                    <h2>Listado de vehículos ordenados por marca</h2>
                    <table>
                        <tr>
                            <th>Marca</th>
                            <th>Matrícula</th>
                            <th>Metalizado</th>
                        </tr>
                        <xsl:for-each select="concesionario/coche">
                            <xsl:sort select="marca"/>
                            <tr>
                                <td><xsl:value-of select="marca"/></td>
                                <td><xsl:value-of select="@matricula"/></td>
                                <td>
                                    <xsl:choose>
                                        <xsl:when test="color/@metalizado='S'">Metalizado</xsl:when>
                                        <xsl:otherwise>No metalizado</xsl:otherwise>
                                    </xsl:choose>
                                </td>
                            </tr>
                        </xsl:for-each>
                    </table>
                </div>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>
